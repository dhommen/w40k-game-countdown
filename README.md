# Warhammer 40K Chaos Countdown Timer

A dark, immersive countdown timer website themed after the Chaos forces from Warhammer 40,000. This project creates an atmospheric experience with thematic quotes, and ambient sound effects.

## Features

- **Dynamic Countdown Timer**: Counts down to a specified event with days, hours, minutes, and seconds
- **Chaos Quotes**: Rotating quotes from the grim darkness of the 41st millennium
- **Immersive Audio**: Optional ambient chaos sounds that can be toggled on/off

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [CSS Modules](https://github.com/css-modules/css-modules) - Component-scoped styling
- [Vercel](https://vercel.com/) - Deployment platform

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/dhommen/w40k-chaos-countdown.git
   cd w40k-chaos-countdown
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Configuration

### Setting the Countdown Target

To change the countdown target date, modify the following code in `src/app/page.tsx`:

```typescript
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);  // Set to tomorrow
targetDate.setHours(10, 0, 0, 0);  // Set to 10:00 AM
```

### Customizing Quotes

Edit the quotes array in `src/app/page.tsx` to add or change the rotating quotes:

```typescript
const quotes: string[] = [
  'Let the galaxy burn!',
  'Blood for the Blood God!',
  // Add or modify quotes here
];
```

### Adding Custom Audio

Replace the audio file at `public/audio/chaos-ambient.mp3` with your own atmospheric audio. Make sure to keep the same filename or update the reference in the code.

## Deployment

This project is designed to be deployed on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically build and deploy your application

For other hosting platforms, build the project with:

```bash
npm run build
# or
yarn build
```

The output in the `.next` folder can be deployed to any static hosting service.

## Legal Notice

This is a fan-made project for private gaming purposes only. All Warhammer 40,000 content, characters, and imagery belong to Games Workshop Limited. This site is not affiliated with or endorsed by Games Workshop.

## License

This project is released under the Apache-2.0 license. See the LICENSE file for details.

---

*"In the grim darkness of the far future, there is only war..."*
