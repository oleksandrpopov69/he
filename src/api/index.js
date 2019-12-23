import {parseResult, sget} from './helpers';

export default {
  getJokes: async () => {
    return await sget({
      url: 'https://official-joke-api.appspot.com/jokes/ten',
    }).then(parseResult);
  },
};
