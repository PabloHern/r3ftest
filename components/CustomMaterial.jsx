import { ShaderMaterial } from 'three';

const CustomMaterial = (color) => {
  return new ShaderMaterial({
    uniforms: {
      color: {
        value: color,
      },
    },
    // Your shader settings go here
  });
};

export default CustomMaterial;