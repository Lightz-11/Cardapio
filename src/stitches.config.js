import { createStitches } from "@stitches/react";

export const { styled, css, keyframes } = createStitches({
    media: {
        sm: "(max-width: 500px)",
        md: "(max-width: 540px)",
        lg: "(max-width: 680px)",
    }
});