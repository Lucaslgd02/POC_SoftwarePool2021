import * as env from 'env-var'
export const PORT = env.get('SERVER_PORT').default(8080).asPortNumber();
export const MESSAGE = env.get('HELLO_MESSAGE').asString();