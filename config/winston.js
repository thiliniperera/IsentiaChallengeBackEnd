const winston = require('winston');

const options = {
    file: {
      level: 'info',
      filename: `./logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    errorFile: {
        level: 'error',
        filename: `./logs/error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
      },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

  let logger = winston.createLogger({
    transports: [
      new (winston.transports.Console)(options.console),
      new (winston.transports.File)(options.errorFile),
      new (winston.transports.File)(options.file)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

  module.exports = {logger};