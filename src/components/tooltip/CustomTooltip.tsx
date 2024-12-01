import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface CustomTooltipProps {
  children: any;
  title: string;
  placement?: "top" | "bottom" | "left" | "right";
  arrowStyle?: React.CSSProperties;
  tooltipStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  noSpan?: boolean;
  arrow?: boolean;
  other?: any;
}

export default function CustomTooltip({
  children,
  title,
  placement,
  arrowStyle,
  tooltipStyle,
  spanStyle,
  noSpan,
  ...other
}: CustomTooltipProps) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        arrow={other.arrow ?? true}
        placement={placement || "top"}
        open={open}
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        componentsProps={{
          tooltip: {
            sx: {
              color: "#FFFFFF",
              backgroundColor: "rgba(75, 101, 163, 0.9)",
              fontSize: 12,
              ...tooltipStyle,
            },
          },
          arrow: {
            sx: {
              "&:before": { border: "1px solid #C8DDE7" },
              color: "rgba(75, 101, 163, 0.9)",
              ...arrowStyle,
            },
          },
        }}
        title={title}
        {...other}
      >
        {noSpan ? (
          children
        ) : (
          <span style={spanStyle ?? {}} onClick={handleTooltipOpen}>
            {children}
          </span>
        )}
      </Tooltip>
    </ClickAwayListener>
  );
}
