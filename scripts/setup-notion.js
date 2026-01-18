#!/usr/bin/env node
/**
 * Development Activity Database Setup for Notion
 *
 * Creates a "Development Activity" database in your Notion workspace
 * to track coding milestones, commits, and session summaries.
 *
 * Usage:
 *   1. Get your Notion API key from https://www.notion.so/my-integrations
 *   2. Create an integration and copy the "Internal Integration Token"
 *   3. Share your Operations Hub page with the integration
 *   4. Run: NOTION_API_KEY=your_key NOTION_PARENT_PAGE_ID=your_page_id node scripts/setup-notion.js
 *
 * Or set environment variables in .env file and run: node scripts/setup-notion.js
 */

import { Client } from '@notionhq/client';

// Load environment variables from .env if available
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID;

if (!NOTION_API_KEY) {
  console.error('Error: NOTION_API_KEY is required');
  console.log('\nTo get your API key:');
  console.log('1. Go to https://www.notion.so/my-integrations');
  console.log('2. Create a new integration');
  console.log('3. Copy the "Internal Integration Token"');
  console.log('\nThen run:');
  console.log('NOTION_API_KEY=your_key NOTION_PARENT_PAGE_ID=page_id node scripts/setup-notion.js');
  process.exit(1);
}

if (!PARENT_PAGE_ID) {
  console.error('Error: NOTION_PARENT_PAGE_ID is required');
  console.log('\nTo get your page ID:');
  console.log('1. Open your Operations Hub page in Notion');
  console.log('2. Copy the URL - it looks like: notion.so/Your-Page-abc123def456');
  console.log('3. The page ID is the last part: abc123def456 (32 characters, no hyphens)');
  console.log('\nThen run:');
  console.log('NOTION_API_KEY=your_key NOTION_PARENT_PAGE_ID=page_id node scripts/setup-notion.js');
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

// Database schema
const DATABASE_SCHEMA = {
  title: [{ type: 'text', text: { content: 'Development Activity' } }],
  properties: {
    'Name': {
      title: {}
    },
    'Date': {
      date: {}
    },
    'Project': {
      select: {
        options: [
          { name: 'YourCo', color: 'orange' },
          { name: 'Tax OCR', color: 'blue' },
          { name: 'Treehouse', color: 'green' },
          { name: 'Ecosystem MCP', color: 'purple' },
          { name: 'Downloads Organizer', color: 'pink' },
          { name: 'Claude Skills', color: 'yellow' }
        ]
      }
    },
    'Type': {
      multi_select: {
        options: [
          { name: 'Feature', color: 'green' },
          { name: 'Bug Fix', color: 'red' },
          { name: 'Refactor', color: 'blue' },
          { name: 'Documentation', color: 'gray' },
          { name: 'Infrastructure', color: 'purple' },
          { name: 'Planning', color: 'yellow' }
        ]
      }
    },
    'Summary': {
      rich_text: {}
    },
    'Commits': {
      number: {
        format: 'number'
      }
    },
    'Files Changed': {
      number: {
        format: 'number'
      }
    },
    'Status': {
      select: {
        options: [
          { name: 'Complete', color: 'green' },
          { name: 'In Progress', color: 'yellow' },
          { name: 'Blocked', color: 'red' }
        ]
      }
    },
    'GitHub Link': {
      url: {}
    }
  }
};

// Initial entries from 2026-01-18 session
const INITIAL_ENTRIES = [
  {
    name: 'Brand typography system',
    date: '2026-01-18',
    project: 'YourCo',
    type: ['Feature', 'Infrastructure'],
    summary: 'Added 56px H1, 40px H2, 28px H3 with mobile responsive breakpoints',
    commits: 1,
    filesChanged: 2,
    status: 'Complete',
    githubLink: 'https://github.com/pqsoccerboy17/YourCo/commit/550f8fd'
  },
  {
    name: 'Services section with full deliverables',
    date: '2026-01-18',
    project: 'YourCo',
    type: ['Feature'],
    summary: 'Added What\'s Included (6 items) and Deliverables list (8 items)',
    commits: 1,
    filesChanged: 1,
    status: 'Complete'
  },
  {
    name: '5-phase methodology update',
    date: '2026-01-18',
    project: 'YourCo',
    type: ['Feature'],
    summary: 'Updated from 4-phase to 5-phase with Pre-Kickoff through Delivery',
    commits: 1,
    filesChanged: 1,
    status: 'Complete'
  },
  {
    name: 'Why [YourCo] section',
    date: '2026-01-18',
    project: 'YourCo',
    type: ['Feature'],
    summary: 'Added comparison vs Big 4, vendors, freelancers, internal teams',
    commits: 1,
    filesChanged: 1,
    status: 'Complete'
  },
  {
    name: 'FAQ with objection handling',
    date: '2026-01-18',
    project: 'YourCo',
    type: ['Feature'],
    summary: '4 common objections with responses from handoff doc',
    commits: 1,
    filesChanged: 1,
    status: 'Complete'
  },
  {
    name: 'CSS reset spacing fix',
    date: '2026-01-18',
    project: 'YourCo',
    type: ['Bug Fix'],
    summary: 'Removed CSS reset that was overriding Tailwind spacing utilities',
    commits: 1,
    filesChanged: 1,
    status: 'Complete',
    githubLink: 'https://github.com/pqsoccerboy17/YourCo/commit/54d673b'
  }
];

async function createDatabase() {
  console.log('Creating Development Activity database...\n');

  try {
    const database = await notion.databases.create({
      parent: { page_id: PARENT_PAGE_ID },
      ...DATABASE_SCHEMA
    });

    console.log('✓ Database created successfully!');
    console.log(`  Database ID: ${database.id}`);
    console.log(`  URL: ${database.url}\n`);

    return database.id;
  } catch (error) {
    if (error.code === 'object_not_found') {
      console.error('Error: Page not found or not shared with integration');
      console.log('\nMake sure to:');
      console.log('1. Open your Operations Hub page in Notion');
      console.log('2. Click "..." menu → "Connections" → Add your integration');
    } else {
      console.error('Error creating database:', error.message);
    }
    process.exit(1);
  }
}

async function addEntry(databaseId, entry) {
  const properties = {
    'Name': {
      title: [{ text: { content: entry.name } }]
    },
    'Date': {
      date: { start: entry.date }
    },
    'Project': {
      select: { name: entry.project }
    },
    'Type': {
      multi_select: entry.type.map(t => ({ name: t }))
    },
    'Summary': {
      rich_text: [{ text: { content: entry.summary } }]
    },
    'Commits': {
      number: entry.commits
    },
    'Files Changed': {
      number: entry.filesChanged
    },
    'Status': {
      select: { name: entry.status }
    }
  };

  if (entry.githubLink) {
    properties['GitHub Link'] = { url: entry.githubLink };
  }

  await notion.pages.create({
    parent: { database_id: databaseId },
    properties
  });

  console.log(`  ✓ Added: ${entry.name}`);
}

async function main() {
  console.log('='.repeat(50));
  console.log('Development Activity Database Setup');
  console.log('='.repeat(50) + '\n');

  // Create the database
  const databaseId = await createDatabase();

  // Add initial entries
  console.log('Adding initial entries from 2026-01-18 session...\n');

  for (const entry of INITIAL_ENTRIES) {
    await addEntry(databaseId, entry);
  }

  console.log('\n' + '='.repeat(50));
  console.log('Setup Complete!');
  console.log('='.repeat(50));
  console.log(`\nDatabase ID: ${databaseId}`);
  console.log('\nAdd this to your .env file:');
  console.log(`ACTIVITY_DATABASE_ID=${databaseId}`);
  console.log('\nNext steps:');
  console.log('1. Open the database in Notion to verify');
  console.log('2. Create views: By Date, By Project, In Progress');
  console.log('3. Add to treehouse-context-sync for automated updates');
}

main().catch(console.error);
