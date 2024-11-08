import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  base: '/team',
  build:{
    rollupOptions:{
      output: {
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : "";
          return (
            driveLetter + 
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          )
        }
      }
    }
  }
});
