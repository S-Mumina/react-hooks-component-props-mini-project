import React from 'react';

function Article({ title, date = "January 1, 1970", preview }) {
 
  const minutesToRead = Math.ceil(preview.split(' ').length / 200);

 
  const emojis = minutesToRead < 30
    ? '☕️'.repeat(Math.ceil(minutesToRead / 5))
    : '🍱'.repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{emojis} {minutesToRead} min read</p>
    </article>
  );
}

export default Article;
