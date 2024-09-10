import { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/order
import videojs from 'video.js';

import 'video.js/dist/video-js.css';
import Player from 'video.js/dist/types/player';

interface Source {
  url: string;
  type: 'video/webm' | 'video/mp4';
}

interface VideoProps {
  readonly sources: Source[];
  readonly poster: string;
}

const initialProps = {
  controls: true,
  fluid: true,
  preload: 'none',
};

const StyledOverrides = styled.div`
  overflow: hidden;
  max-width: 100%;

  video {
    max-width: 100%;
  }

  .video-js {
    .vjs-big-play-button {
      border: 0;
      border-radius: 0;
      background-color: rgba(13, 82, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5rem;
      width: 12.5rem;
      height: 8.2rem;
      margin-top: 0;
      margin-left: 0;
      transform: translate(-50%, -50%);

      span {
        &::before {
          position: static;
          display: block;
        }
      }
    }

    .vjs-control-bar {
      display: flex;
      background-color: #376bff;
    }

    .vjs-slider {
      background-color: rgba(255, 255, 255, 0.5);
    }

    .vjs-load-progress {
      div {
        background-color: rgba(255, 255, 255, 0.7);
      }
    }

    &:hover {
      .vjs-big-play-button {
        background-color: rgba(13, 82, 255, 0.7);
      }
    }
  }

  .vjs-has-started {
    .vjs-big-play-button {
      display: none;
    }
  }
`;

export const Video = ({ sources: rawSources, poster }: VideoProps) => {
  const player = useRef<Player | null>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video.current) {
      player.current = videojs(video.current, { ...initialProps });
    }

    return () => {
      if (player.current?.isDisposed()) {
        player.current.dispose();
        player.current = null;
      }
    };
  }, []);

  const sources = useMemo(
    () =>
      rawSources.map((source) => ({
        ...source,
        url: source.url,
      })),
    [rawSources],
  );

  return (
    <StyledOverrides>
      <div data-vjs-player>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className="video-js" poster={poster} ref={video}>
          {sources.map((source, idx) => (
            <source key={idx} src={source.url} type={source.type} />
          ))}
        </video>
      </div>
    </StyledOverrides>
  );
};
