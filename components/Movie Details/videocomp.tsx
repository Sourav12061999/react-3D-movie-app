import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Carousel from "react-material-ui-carousel";
interface videoInterface {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
interface SimpleDialogProps {
  open: boolean;
  setOpen: Function;
  videos: Array<videoInterface>;
}

export default function Videocomp(props: SimpleDialogProps) {
  const { open, setOpen, videos } = props;

  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogTitle>See Movie Trailers</DialogTitle>
      <Carousel></Carousel>
    </Dialog>
  );
}
