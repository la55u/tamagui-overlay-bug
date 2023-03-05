import { AlertDialog, styled } from 'tamagui'

export const MyOverlay = styled(AlertDialog.Overlay, {
  animation: 'quick',
  backgroundColor: 'gray',
  opacity: 0.7,
  enterStyle: { opacity: 0 },
})

export const MyAlert = AlertDialog
