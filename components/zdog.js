import React, { useEffect } from "react";

function mountZdog() {
  // rotating flag variable
  let isSpinning = true;

  let illo = new Zdog.Illustration({
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
    translate: { z: 20 },
    stroke: 20,
    color: "#636"
  });

  // square
  new Zdog.Rect({
    addTo: illo,
    width: 80,
    height: 80,
    // position further back
    translate: { z: -20 },
    stroke: 12,
    color: "#E62",
    fill: true
  });

  // update & render
  illo.updateRenderGraph();

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

const Zchart = () => {
  useEffect(() => {
    mountZdog();
  }, []);
  return (
    <>
      <canvas className="zdog-canvas" width="240" height="240"></canvas>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
          text-align: center;
        }
        .title {
          font-family: Helvetica, sans-serif;
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Zchart;
