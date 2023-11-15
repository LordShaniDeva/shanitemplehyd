import mongoose from 'mongoose';
/**
 * Fallback model function for mongoose.
 */
const next = {
  model: (name: string, schema: mongoose.Schema) => {
    const Model = mongoose.models[name] || mongoose.model(name, schema);
    return Model;
  },
};

export default next;
