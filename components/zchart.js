import React, { useEffect } from "react";

const data = [1, 3, 5, 4, 6, 8, 5, 9, 5, 4, 5, 6, 3, 4, 3, 4, 5, 2, 3, 6, 7];

const Zchart = props => {
  const { width, height, zoom, ...restProps } = props;
  // rotating flag variable
  let isSpinning = true;
  let illo;

  function mountZdog() {
    illo = new Zdog.Illustration({
      element: ".zdog-canvas",
      dragRotate: true,
      zoom: zoom,
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
        { x: 25, y: -9 },
        { move: { x: 30, y: 0 } },
        { x: 30, y: -6 }
      ],
      closed: false,
      stroke: 4,
      translate: { x: -15, y: 5, z: 5 },
      color: "#f6546a"
    });

    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 0, y: 0 },
        { x: 0, y: -8 },
        { move: { x: 5, y: 0 } },
        { x: 5, y: -12 },
        { move: { x: 10, y: 0 } },
        { x: 10, y: -16 },
        { move: { x: 15, y: 0 } },
        { x: 15, y: -18 },
        { move: { x: 20, y: 0 } },
        { x: 20, y: -16 },
        { move: { x: 25, y: 0 } },
        { x: 25, y: -12 },
        { move: { x: 30, y: 0 } },
        { x: 30, y: -8 }
      ],
      closed: false,
      stroke: 4,
      translate: { x: -15, y: 5, z: 0 },
      color: "#c0d6e4"
    });

    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 0, y: 0 },
        { x: 0, y: -3 },
        { move: { x: 5, y: 0 } },
        { x: 5, y: -4 },
        { move: { x: 10, y: 0 } },
        { x: 10, y: -6 },
        { move: { x: 15, y: 0 } },
        { x: 15, y: -8 },
        { move: { x: 20, y: 0 } },
        { x: 20, y: -3 },
        { move: { x: 25, y: 0 } },
        { x: 25, y: -7 },
        { move: { x: 30, y: 0 } },
        { x: 30, y: -6 }
      ],
      closed: false,
      stroke: 4,
      translate: { x: -15, y: 5, z: -5 },
      color: "#4CA3DD"
    });

    let ticker = 0;
    let cycleCount = 333;

    function animate() {
      let progress = ticker / cycleCount;
      // apply easing to rotation
      let tween = Zdog.easeInOut(progress % 1, 3);
      if (isSpinning) illo.rotate.y = tween * Zdog.TAU;
      ticker++;

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
      <svg className="zdog-canvas" width={width} height={height}></svg>

      <style jsx>{``}</style>
    </>
  );
};

Zchart.defaultProps = {
  width: 300,
  height: 300
};

export default Zchart;
