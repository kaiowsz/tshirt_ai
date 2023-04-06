import React, { ReactNode, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"
import state from "../store"

interface CameraRigProps {
  children: ReactNode;
}

const CameraRig = ({children}: CameraRigProps) => {
  const group: any = useRef()
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition: [x: number, y: number, z: number] = [-0.4, 0, 2]

    if(snap.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 2]
      if(isMobile) targetPosition = [0, 0.2, 2.5]
      
    } else {
      if(isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2] 
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    easing.dampE(group?.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.5, delta);



  })

  
  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig