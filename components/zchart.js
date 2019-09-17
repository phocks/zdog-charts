import React, { useEffect } from "react";

const data = [1, 3, 5, 4, 6, 8, 5, 9, 5, 4, 5, 6, 3, 4, 3, 4, 5, 2, 3, 6, 7];

const Zchart = props => {
  // rotating flag variable
  let isSpinning = false;
  let illo;

  function mountZdog() {
    illo = new Zdog.Illustration({
      element: ".zdog-canvas",
      dragRotate: true,
      zoom: 3,
      // stop rotation when dragging starts
      onDragStart: function() {
        isSpinning = false;
      }
    });

    // // circle
    // new Zdog.Ellipse({
    //   addTo: illo,
    //   diameter: 80,
    //   // position closer
    //   translate: { z: 0 },
    //   stroke: 20,
    //   color: "#636"
    // });

    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 0, y: 0 },
        { x: 0, y: -6 },
        { move: { x: 5, y: 0 } },
        { x: 5, y: -10 },
        { move: { x: 10, y: 0 } },
        { x: 10, y: -8 },
        { move: { x: 15, y: 0 } },
        { x: 15, y: -12 },
        { move: { x: 20, y: 0 } },
        { x: 20, y: -15 },
        { move: { x: 25, y: 0 } },
        { x: 25, y: -9 }
      ],
      closed: false,
      stroke: 4,
      translate: { x: -10, y: 0 },
      color: "aquamarine"
    });

    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 0, y: 0 },
        { x: 0, y: -8 },
        { move: { x: 5, y: 0 } },
        { x: 5, y: -4 },
        { move: { x: 10, y: 0 } },
        { x: 10, y: -7 },
        { move: { x: 15, y: 0 } },
        { x: 15, y: -18 },
        { move: { x: 20, y: 0 } },
        { x: 20, y: -13 },
        { move: { x: 25, y: 0 } },
        { x: 25, y: -4 }
      ],
      closed: false,
      stroke: 4,
      translate: { x: -10, y: 0, z: -5 },
      color: "#d24311"
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
