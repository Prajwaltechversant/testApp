import { server } from './src/testing-components/mock/server';  
// import { TextEncoder, TextDecoder } from 'util';
// global.TextEncoder = TextEncoder;

// global.TextDecoder = TextDecoder;
// beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
