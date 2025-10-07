export type FileMimeType =
  | 'application/pdf' // .pdf
  | 'application/msword' // .doc
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // .docx
  | 'text/plain' // .txt
  | 'application/vnd.ms-excel' // .xls
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // .xlsx
  | 'text/csv' // .csv
  | 'video/mp4' // .mp4
  | 'audio/mpeg' // .mp3
  | 'audio/wav' // .wav
  | 'image/jpeg' // .jpg .jpeg
  | 'image/png' // .png
  | 'image/webp'; // .webp;

export type MaxSize = [number, 'bytes' | 'KB' | 'MB' | 'GB'];
