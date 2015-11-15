module.exports = {
  options: {
    logConcurrentOutput: true,
    limit: 8
  },
  dev: {
    //tasks: ['notify_hooks', 'nodemon','browserSync'],
    tasks: ['notify_hooks', 'nodemon', 'watch'],
    options: {
      logConcurrentOutput: true
    }
  }
};