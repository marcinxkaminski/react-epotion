export const getEmotionEmoji = (emotion) => {
  switch (emotion) {
    case 'neutral':
      return (
        <span role="img" aria-label="Expressionless Face emoji">
          😑
        </span>
      );

    case 'happy':
      return (
        <span role="img" aria-label="Smiling Face with Smiling Eyes emoji">
          😊
        </span>
      );

    case 'sad':
      return (
        <span role="img" aria-label="Slightly Frowning Face emoji">
          🙁
        </span>
      );

    case 'angry':
      return (
        <span role="img" aria-label="Angry Face emoji">
          😠
        </span>
      );

    case 'fearful':
      return (
        <span role="img" aria-label="Fearful Face emoji">
          😨
        </span>
      );

    case 'disgusted':
      return (
        <span role="img" aria-label="Nauseated Face emoji">
          🤢
        </span>
      );

    case 'surprised':
      return (
        <span role="img" aria-label="Face with Open Mouth emoji">
          😮
        </span>
      );

    default:
      return (
        <span role="img" aria-label="Robot Face emoji">
          🤖
        </span>
      );
  }
};

export const getEpotionIcon = () => (
  <span role="img" aria-label="Potion emoji">
    🧪
  </span>
);
