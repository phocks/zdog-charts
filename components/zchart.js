import React, { useEffect } from "react";
import Rect from "../components/rect";

const Zchart = props => {
  // rotating flag variable
  let isSpinning = true;
  let illo;

  function mountZdog() {
    illo = new Zdog.Illustration({
      element: ".zdog-canvas",
      dragRotate: true,
      // stop rotation when dragging starts
      onDragStart: function() {
        isSpinning = false;
      }
    });

    // circle
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 80,
      // position closer
      translate: { z: 0 },
      stroke: 20,
      color: "#636"
    });

    function animate() {
      // rotate
      if (isSpinning) {
        illo.rotate.y += 0.03;
      }
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();
  }

  useEffect(() => {
    mountZdog();
  }, []);
  return (
    <>
      <canvas className="zdog-canvas" width="240" height="240"></canvas>

      <style jsx>{``}</style>
    </>
  );
};

export default Zchart;
