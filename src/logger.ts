import { SniffingTransport } from '@elastic/elasticsearch';
import { transform } from 'typescript';
import winston, { log, Logger }  from 'winston';
import { ElasticsearchTransformer, ElasticsearchTransport, LogData, TransformedData } from 'winston-elasticsearch';
import { cli } from 'winston/lib/winston/config';

const esTransformer = (LogData: LogData): TransformedData => {
 return ElasticsearchTransformer(LogData)
}

export const winstonLogger = (elasticsearchNode: string, name: string, level: string): Logger => {
    const options = {
      console: {
        level,
        handleExceptions: true,
        json: false,
        colorize: true
     },
     elasticsearch:{
        level,
        transformer: esTransformer,
        clientOpts: {
            node: elasticsearchNode,
            log: 'level',
            maxRetries: 2,
            requestTimeout: 10000, // 10 seconds
            SniffOnStart: false,
        }
     }
    };

    const esTransport: ElasticsearchTransport = new ElasticsearchTransport(options.elasticsearch);
    const logger: Logger = winston.createLogger({
       exitOnError: false,
       defaultMeta: { service: name },
       transports: [new winston.transports.Console(options.console), esTransport]
    });
    return logger;
}