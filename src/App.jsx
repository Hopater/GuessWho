import { useEffect, useState } from 'react';

export default function App() {
  const [discordUser, setDiscordUser] = useState(null);

  useEffect(() => {
    // Initialize Discord SDK
    window.DiscordSDK?.ready().then(() => {
      const discord = new window.DiscordSDK("YOUR_CLIENT_ID"); // replace this
      discord.commands.authorize().then(() => {
        discord.commands.getUser().then(setDiscordUser);
      });
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Logic Puzzle Game</h1>
      {discordUser ? (
        <p>Welcome, {discordUser.username}!</p>
      ) : (
        <p>Loading Discord context...</p>
      )}
    </div>
  );
}
