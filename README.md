# Flight Offers Scraper

This script is designed to scrape flight offers from the eDreams website and store them in a JSON file. It uses the Playwright library to automate web interactions and retrieve flight information.

## Installation

1. Clone the repository:

2. Install dependencies using npm:

3. Configure User Agent Strings (Optional):
You can configure the `userAgentStrings` array in the `index.js` file with the user agent strings you want to use for scraping.

## Usage

1. Run the scraper script:
This will launch a browser, navigate to the specified URL on the eDreams website, scrape flight offers, and store them in a JSON file.

2. The scraped flight offers will be stored in the `flight_offers.json` file.

## GitHub Action

This repository is set up with a GitHub Action workflow that automatically runs the scraper script at specified intervals and updates the `flight_offers.json` file in the repository. The workflow configuration is defined in `.scrape-flights-offers.yml`.

## License

This project is licensed under the MIT License - see the [LICENSE](https://mit-license.org/) file for details.

## Disclaimer

Please be respectful when scraping websites and follow their terms of service. This script is intended for educational purposes and personal use only.

---

Happy scraping!
