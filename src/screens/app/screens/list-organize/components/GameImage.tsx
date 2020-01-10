import * as React from "react";

interface Props {
  name: string;
  imageUrl: string;
  children: (props: RenderProps) => React.ReactNode;
}

interface RenderProps {
  alt: string;
  title: string;
  src: string;
}

export default (props: Props) => (
  <div className="game image wrapper">
    {props.children({
      alt: props.name,
      src: props.imageUrl,
      title: props.name,
    })}
  </div>
);
