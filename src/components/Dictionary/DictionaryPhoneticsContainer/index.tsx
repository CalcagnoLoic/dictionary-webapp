import { useRef, useState } from "react";

import Paragraph from "../../../typographies/Paragraph";
import Heading from "../../../typographies/Heading";
import PlayIcon from "../../../icons/PlayIcon";

interface PhoneticProps {
  word: string;
  phonetic: string;
  audio: string | undefined;
}

const Component = ({ word, phonetic, audio }: PhoneticProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio(audio));

  const toogleAudio = (): void => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="flex justify-between">
      <div className="self-center">
        <Heading kind="h1" content={word} />

        <Paragraph css="mt-3 text-xl text-electricViolet" content={phonetic} />
      </div>

      <>
        <audio src={audio} ref={audioRef}></audio>
        <PlayIcon handleClick={toogleAudio} />
      </>
    </div>
  );
};

export default Component;
