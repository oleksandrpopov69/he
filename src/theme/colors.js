const colors = {
  white1: '#FFFFFF',
  white2: '#E5E7EC',
  grey: '#A8B6C8',
  green1: '#64EB9D',
  green2: '#58CEE7',
  blue1: '#6592FD',
  blue2: '#007AFF',
  purple: '#5F59F7',
  dark1: '#263762',
  dark2: '#0B1735',
  black: '#000000',
  yellow1: '#FFBD6D',
  yellow2: '#F7D859',
  orange1: '#FC9865',
  orange2: '#F75D59',
  rgba: {
    white1: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    white2: (opacity: number) => `rgba(229, 231, 236, ${opacity})`,
    grey: (opacity: number) => `rgba(168, 182, 200, ${opacity})`,
    green1: (opacity: number) => `rgba(100, 235, 157, ${opacity})`,
    green2: (opacity: number) => `rgba(88, 206, 231, ${opacity})`,
    blue1: (opacity: number) => `rgba(101, 146, 253, ${opacity})`,
    blue2: (opacity: number) => `rgba(0, 122, 255, ${opacity})`,
    purple: (opacity: number) => `rgba(95, 89, 247, ${opacity})`,
    dark1: (opacity: number) => `rgba(38, 55, 89, ${opacity})`,
    dark2: (opacity: number) => `rgba(11, 23, 53, ${opacity})`,
    black: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    yellow1: (opacity: number) => `rgba(255, 189, 109, ${opacity})`,
    yellow2: (opacity: number) => `rgba(247, 216, 89, ${opacity})`,
    orange1: (opacity: number) => `rgba(252, 152, 101, ${opacity})`,
    orange2: (opacity: number) => `rgba(247, 93, 89, ${opacity})`,
  },
};

const getColor = (color: string = 'dark1', opacity: ?number = 1) => {
  return colors.rgba[color]
    ? colors.rgba[color](opacity)
    : colors[color] || color;
};

export default {colors, getColor};
