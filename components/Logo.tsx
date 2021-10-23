interface Props {
  prefersDarkMode: boolean
}

export default function Logo({ prefersDarkMode }: Props) {
  return (
    <svg height="45" viewBox="0 0 65 65" width="45">
      <g fill={prefersDarkMode ? '#fff' : '#000'}>
        <path d="m31 5c14.888 0 27 12.112 27 27s-12.112 27-27 27-27-12.112-27-27 12.112-27 27-27m0-3c-16.567 0-30 13.432-30 30s13.433 30 30 30 30-13.432 30-30-13.433-30-30-30z" />
        <path d="m43.987 29.745-15.974-10.513c-2.757-1.814-5.013-.597-5.013 2.703v22.125c0 3.3 2.259 4.521 5.021 2.714l15.959-10.444c2.761-1.809 2.764-4.771.007-6.585zm-2.129 4.379-14.185 9.283c-.92.603-1.673.196-1.673-.904v-19.012c0-1.1.752-1.505 1.671-.9l14.19 9.338c.919.604.918 1.592-.003 2.195z" />
      </g>
    </svg>
  )
}