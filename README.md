## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/brittshook/movie-search-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-search-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Update API Key:

   Open the `src/utils/apiUtils.ts` file and replace `"your_api_key_here"` with your actual API key. This file is responsible for making API requests, so it needs to have a valid API key. To get an API key for OMDb, sign up [here](https://www.omdbapi.com/apikey.aspx).

   ```typescript
   // src/utils/apiUtils.ts

   const apiKey = "your_api_key_here"; // Update this with your actual API key
   ```

## Usage

After installation, you can run the project locally using the following command:

```bash
npm run dev
```
