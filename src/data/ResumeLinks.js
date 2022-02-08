const ids = {
  pdf: '1oWru5KCmT0Ss5lak0yOOJd22jb4YGlVY',
  word: '1AmdXblzfe6DvzuURU4sHctjKsrMhkIqx'
};

const ResumeLinks = {
  getDownload: (format) => {
    return 'https://drive.google.com/u/0/uc?id=' + ids[String(format).toLowerCase()] + '&export=download';
  },
  getPreview: (format) => {
    return 'https://drive.google.com/file/d/' + ids[String(format).toLowerCase()] + '/preview';
  }
};

export default ResumeLinks;
