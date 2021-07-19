const { Schema, model } = require("mongoose");

const movieSchema = Schema(
  {
    id: {
      type: Number,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    release_date: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
      trim: true,
    },
    overview: {
      type: String,
      trim: true,
    },
    cover_url: {
      type: String,
      trim: true,
    },
    trailer_url: {
      type: String,
      trim: true,
    },
    directed_by: {
      type: String,
      trim: true,
    },
    phase: {
      type: Number,
      trim: true,
    },
    saga: {
      type: String,
      trim: true,
    },
    chronology: {
      type: Number,
      trim: true,
    },
    post_credit_scenes: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = model("Movie", movieSchema);
