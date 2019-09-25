import React from 'react';
import { useFetch } from './hooks';

function Stories() {
  const stories = useFetch(`https://news-proxy-server.appspot.com/topstories`, []);

  return (
    <div className='Stories'>
      <h3>Stories</h3>
      {
        stories.map(story => {
          const { id, by, time, title, url } = story;
          return (
            <div key={id}>
              <a target="_blank" rel="noopener noreferrer" href={url} >{title}</a>
              <div>{by} - {new Date(time * 1000).toLocaleDateString()}</div>
            </div>
          );
        })
      };
    </div>
  );
}

export default Stories;