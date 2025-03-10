// src/lib/models/task.js
import mongoose, { Schema } from 'mongoose';

// Define Task Schema
const taskSchema = new Schema({
  task: {
    type: String,
    required: true, // Task text is required
    trim: true,      // Remove whitespace from beginning and end
  },
  completed: {
    type: Boolean,
    default: false,  // Tasks are initially not completed
  },
  important: {
    type: Boolean,
    default: false,  // Tasks are initially not important
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set creation timestamp
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set update timestamp
  },
});

// Add pre-save middleware to update updatedAt on each save
taskSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Define Task Model
const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;