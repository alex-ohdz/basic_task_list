// utils/formatTask.js

const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
const userRegex = /(^|\s)@\w+/;
const linkRegex = /(^|\s)\bhttps?:\/\/\S+/;
const hashtagRegex = /(^|\s)#\w+/;

export const formatTask = (task) => {
  return task.split(' ').map(word => {
    if (emailRegex.test(word)) {
      return `<span style="color: orange;">${word}</span>`;
    }
    if (userRegex.test(word)) {
      return `<span style="color: green;">${word}</span>`;
    }
    if (linkRegex.test(word)) {
      return `<span style="color: blue;">${word}</span>`;
    }
    if (hashtagRegex.test(word)) {
      return `<span style="color: violet;">${word}</span>`;
    }
    return word;
  }).join(' ');
};

export const handleFormatText = (task, key) => {
  if (key === " ") {
    return task.split(' ').map(word => {
      if (emailRegex.test(word)) {
        return `<span style="color: orange;">${word}</span>`;
      }
      if (userRegex.test(word)) {
        return `<span style="color: green;">${word}</span>`;
      }
      if (linkRegex.test(word)) {
        return `<span style="color: blue;">${word}</span>`;
      }
      if (hashtagRegex.test(word)) {
        return `<span style="color: violet;">${word}</span>`;
      }
      return word;
    }).join(' ') + ' ';
  }
  return task;
};
