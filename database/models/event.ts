import { Schema } from 'mongoose';
import next from '../fallback';

// event_id = 1
// event_name = "Diwali Celebration"
// event_description = "Celebrate the festival of lights with us!"
// event_date = "2023-10-14"
// event_time = "18:00:00"
// event_location = "Temple Auditorium"
// event_organizer = "Temple Events Committee"
// event_contact = "events@temple.com"

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    startData: {
      type: String,
    },
    endData: {
      type: String,
    },
    location: {
      type: String,
    },
    organizer: {
      type: String,
    },
    contact: {
      type: String,
    },
    cost: {
      type: String,
    },
    category: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const EventModel = next.model('event', eventSchema);
export default EventModel;
