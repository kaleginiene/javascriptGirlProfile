import { Ref, useContext, useRef } from "react";
import { islandRotationContext } from "src/contexts/islandRotationContext";
import { Group, Object3DEventMap } from "three";

interface UseIslandPositionProps {
  viewport: any;
}

export const useIslandPosition = ({ viewport }: UseIslandPositionProps) => {
  const { isRotating, setCurrentStage, setIsRotating } = useContext(
    islandRotationContext
  );

  const islandRef = useRef<Ref<Group<Object3DEventMap>> | null>(null);
  // const [isRotating, setIsRotating] = useState<boolean>(false);

  // Last horizontal mouse position;
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e: any): void => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  const handlePointerUp = (e: TouchEvent | MouseEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e: any): void => {
    e.stopPropagation();
    e.preventDefault();

    if (!isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      // Update the island's rotation based on the mouse/touch movement
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e: KeyboardEvent): void => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      if (islandRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        islandRef.current.rotation.y -= 0.01 * Math.PI;
      }
    }
  };

  const handleIslandPosition = (canvas: HTMLCanvasElement): void => {
    // Add event listeners for pointer and keyboard events
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  };

  const handleIslandUnmount = (canvas: HTMLCanvasElement): void => {
    canvas.removeEventListener("pointerdown", handlePointerDown);
    canvas.removeEventListener("pointerup", handlePointerUp);
    canvas.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };

  const handleFramePosition = () => {
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  };

  return {
    lastX,
    rotationSpeed,
    dampingFactor,
    islandRef,
    isRotating,
    handleIslandUnmount,
    handleIslandPosition,
    handleFramePosition,
    //handlers
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
  };
};