# 🥁 Drum Kit

A browser-based interactive drum kit that lets you play drum sounds using your keyboard. Built with vanilla HTML, CSS, and JavaScript with a modular architecture.

## 🎮 Live Demo

**[Try it now!](https://ivanbatistao.github.io/drum-kit/)** 🎵

Click the link above to play the drum kit directly in your browser - no installation required!

## ✨ Features

- **9 Different Drum Sounds**: clap, hihat, kick, openhat, boom, ride, snare, tom, and tink
- **Keyboard Controls**: Use keys A, S, D, F, G, H, J, K, L to play different drum sounds
- **Visual Feedback**: Keys light up and scale when pressed
- **Responsive Design**: Works on both desktop and mobile devices
- **Throttled Input**: Prevents audio overlap and ensures smooth performance
- **Modular Code Structure**: Clean, organized codebase with helper functions

## 🎮 How to Play

| Key | Sound |
|-----|-------|
| A | Clap |
| S | Hi-hat |
| D | Kick |
| F | Open Hat |
| G | Boom |
| H | Ride |
| J | Snare |
| K | Tom |
| L | Tink |

Simply press any of these keys on your keyboard to play the corresponding drum sound!

## 🚀 Getting Started

### Quick Start
**Just want to play?** Visit the [live demo](https://ivanbatistao.github.io/drum-kit/) and start making beats immediately!

### Local Development

#### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

#### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ivanbatistao/drum-kit.git
   cd drum-kit
   ```

2. Open `index.html` in your web browser:
   ```bash
   # Option 1: Open index.html directly in your browser
   # Option 2: Use an extension like Live Server (Five Server)
   ```

3. Start playing! Press the keys A-L to make some beats.

## 📁 Project Structure

```
drum-kit/
├── index.html          # Main HTML file
├── index.css           # Styling and responsive design
├── index.js            # Main JavaScript entry point
├── audios/             # Audio files directory
│   ├── boom.mp3
│   ├── clap.mp3
│   ├── hihat.mp3
│   ├── kick.mp3
│   ├── openhat.mp3
│   ├── ride.mp3
│   ├── snare.mp3
│   ├── tink.mp3
│   └── tom.mp3
└── helpers/            # Utility functions
    ├── dom/            # DOM manipulation helpers
    │   ├── index.js
    │   ├── playAudio.js
    │   ├── addStyleToPlayingKey.js
    │   └── removePlayingKeyStyle.js
    └── utils/          # Utility functions
        └── throttle.js
```

## 🛠️ Technical Details

### Architecture
- **Modular Design**: Code is organized into logical modules for better maintainability
- **ES6 Modules**: Uses modern JavaScript module system
- **Event-Driven**: Responds to keyboard events with throttling for performance
- **CSS Transitions**: Smooth visual feedback with CSS transforms and transitions

### Key Components

1. **Main Application** (`index.js`)
   - Sets up keyboard event listeners
   - Coordinates audio playback and visual effects
   - Implements throttling to prevent rapid-fire events

2. **DOM Helpers** (`helpers/dom/`)
   - `playAudio.js`: Handles audio playback logic
   - `addStyleToPlayingKey.js`: Adds visual feedback when keys are pressed
   - `removePlayingKeyStyle.js`: Removes visual effects after animation

3. **Utilities** (`helpers/utils/`)
   - `throttle.js`: Implements throttling functionality to control event frequency

### Browser Compatibility
- Modern browsers with ES6 module support
- Audio API support required
- CSS Grid and Flexbox support recommended

## 🎨 Customization

### Adding New Sounds
1. Add your audio file to the `audios/` directory
2. Add a new key element in `index.html` with appropriate `data-key` attribute
3. Add corresponding audio element with matching `data-key`
4. Update the key mappings in this README

### Styling
- Modify `index.css` to change colors, sizes, or animations
- The design is responsive and uses CSS Grid/Flexbox
- Key animations use CSS transforms for smooth performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](https://mit-license.org/).

## 🎵 Credits

- Audio samples: High-quality drum samples for realistic sound
- Built with vanilla JavaScript for maximum compatibility
- Responsive design for cross-device compatibility

---

**Enjoy making beats! 🎶**