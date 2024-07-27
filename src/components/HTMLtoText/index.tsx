import { createMarkup } from '@/utils/usePurify'

export function ConvertHTMLtoText({
  html,
  title,
}: {
  html: string
  title?: string
}) {
  return (
    <div className="flex flex-col gap-12 rounded-2x bg-primary-100 p-32 font-sans text-[2rem] text-neutral-white">
      {title && <p className="font-roboto text-[3.2rem]">{title}</p>}
      <div
        className="article-content"
        dangerouslySetInnerHTML={createMarkup(html)}
      />
    </div>
  )
}
