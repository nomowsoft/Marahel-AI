import fs from 'fs';
import path from 'path';

export function getMessages(locale: string) {
  const filePath = path.join(process.cwd(), 'src', 'locales', `${locale}.json`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading locale file: ${locale}`, error);
    return null;
  }
}