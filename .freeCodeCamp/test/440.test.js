const assert = require('assert');
const { getLastCommand, getDirectoryContents, getCwd } = require('./utils');

describe('You', () => {
  it('should use the "touch" command to create the correct file', async () => {
    const cwd = await getCwd();
    const directoryContents = await getDirectoryContents(`..`);
    const lastCommand = await getLastCommand();

    assert(directoryContents.includes('insert_data.sh') && lastCommand[0] === 'touch' && /insert_data\.sh/g.test(lastCommand[1]) && /\/project$/.test(cwd));
  });
});
