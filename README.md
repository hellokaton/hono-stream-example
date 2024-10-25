# Hono + Bun + OpenAI Chat Example

A real-time AI chat application that leverages Server-Sent Events (SSE) to stream responses from OpenAI's API. Built with Hono framework and powered by Bun runtime.

## Features

- 🚀 Real-time streaming responses using Server-Sent Events (SSE)
- ⚡️ High-performance backend powered by Bun runtime
- 🔄 Seamless integration with OpenAI API
- 🛠️ Built with Hono - a lightweight, ultrafast web framework
- 📱 Modern and responsive chat interface

## Prerequisites

Before you begin, ensure you have the following installed:
- [Bun](https://bun.sh) (latest version)
- An OpenAI API key

## Usage

```bash
bun install
```

3. Create a `.env` file in the project root and add your OpenAI API key:
```env
OPENAI_API_KEY=your_api_key_here
```

## Quick Start

1. Start the development server:
```bash
bun run dev
```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
project-root/
├── src/
│   ├── index.ts        # Entry point
│   ├── routes/         # API routes
│   ├── services/       # OpenAI service integration
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
├── tests/              # Test files
└── package.json
```

## API Endpoints

### POST /api/chat
Initiates a chat session with the AI model.

#### Request
```json
{
  "message": "Your message here"
}
```

#### Response
Server-Sent Events stream with AI responses.

## Configuration

The application can be configured through environment variables:

```env
PORT=3000                    # Server port (default: 3000)
OPENAI_API_KEY=your_key      # OpenAI API key
MODEL=gpt-3.5-turbo         # OpenAI model to use
```

## Development

### Running Tests
```bash
bun test
```

### Building for Production
```bash
bun run build
```

## Deployment

This application can be deployed to any platform that supports Bun. Here's an example using Docker:

```dockerfile
FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
CMD ["bun", "start"]
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Hono](https://hono.dev) - The ultrafast web framework
- [Bun](https://bun.sh) - The fast all-in-one JavaScript runtime
- [OpenAI](https://openai.com) - For providing the AI capabilities

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/project-name](https://github.com/yourusername/project-name)
