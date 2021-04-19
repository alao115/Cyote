import winston from 'winston'
import os from 'os'
import moment from 'moment'

import config from '../config'

const { splat, combine, timestamp, printf } = winston.format;

class Logger {
	constructor(name, options = {}) {
		this.name = name;
    this.hostname = os.hostname();

		this.logger = winston.createLogger({
    		level: options.logLevel,
        defaultMeta: { service: name },
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.metadata({fillExcept: ['timestamp', 'service', 'level', 'message']}),
                    winston.format.colorize(),
                    this.winstonConsoleFormat()
               	)
           	})
				]	
		})
	}

	winstonConsoleFormat() {
    return printf(({ timestamp, level, message, metadata }) => {
    	const metadataString = metadata != null ? JSON.stringify(metadata) : '';

			//return `[${moment(timestamp).format("YYYY-DD-MM H:m:ss")}][${level}][${this.name}@${this.hostname}] ${message}. ${'metadata: ' + metadataString}`;
			return `[${moment(timestamp).format("YYYY-DD-MM H:m:ss")}][${level}][${this.name}@${this.hostname}] ${message}.`;
    })
	}

	debug(log, metadata) {
    this.logger.debug(log, metadata);
  }

  info(log, metadata) {
    this.logger.info(log, metadata);
  }

  warn(log, metadata) {
    this.logger.warn(log, metadata);
  }

  error(log, metadata) {
    this.logger.error(log, metadata);
  }

  log(level, log, metadata) {
      const metadataObject = {}
      if (metadata) metadataObject.metadata = metadata

      this.logger[level](log, metadataObject)
  }
}
export default new Logger(config.appName, { logLevel: config.logLevel })

// We will also expose a function if we want
// to use the logger with custom parameters
export const getLogger = (name) => {
  return new Logger(name);
}
