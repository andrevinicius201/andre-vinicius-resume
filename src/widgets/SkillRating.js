import { Rating } from 'flowbite-react';

export default function SkillRating(){
    return (
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
      );
}