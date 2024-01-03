/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext } from "react";
import { islandRotationContext } from "src/contexts/islandRotationContext";

export const useIslandPosition = () => {
  const { isRotating, setCurrentStage, setIsRotating } = useContext(
    islandRotationContext
  );

  const handlePointerUp = (e: TouchEvent | MouseEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleKeyUp = (e: KeyboardEvent): void => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleFramePosition = (
    rotationSpeed: React.MutableRefObject<number>,
    islandRef: any
  ) => {
    if (!isRotating) {
      // Apply damping factor
      const DAMPING_FACTOR = 0.95;

      rotationSpeed.current *= DAMPING_FACTOR;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      //@ts-ignore
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      handleCurrentStage(islandRef);
    }
  };

  const handleCurrentStage = (islandRef: any): void => {
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
        setCurrentStage(5);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 3.4 && normalizedRotation <= 3.8:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(1);
        break;

      default:
        setCurrentStage(null);
    }
  };

  return {
    handleFramePosition,
    handlePointerUp,
    handleKeyUp,
  };
};
