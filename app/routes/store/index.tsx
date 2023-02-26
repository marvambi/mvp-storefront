// ./app/routes/store/index.tsx
import { ArrowIcon, GitHubIcon, TwitterIcon, YoutubeIcon } from '~/components/icons';
import { API_URL } from '~/lib/config';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

console.log(`The API URL is ${API_URL}`);
export default function Index() {

  return (
    <div className="h-screen bg-ghostwhite-500 flex justify-center items-center flex-col">
      <h3 className="text-blue-500 font-extrabold text-5xl rounded-md p-4 my-2 bg-slate-100">Products...</h3>
      <div className="rounded-md bg-slate-200 p-2 grid lg:grid-cols-3 gap-2 md:grid-cols-2 overflow-scroll">
        {[1, 2, 3, 4].map((it) => (
          <Card key={it} className="w-60 mx-2">
            <CardHeader color="white" className="h-36 justify-center items-center">
              <img
                src="https://m.media-amazon.com/images/I/91QOsoaw2rL._AC_SX679_.jpg"
                alt="img-blur-shadow"
                className="h-full w-auto mx-auto mt-2"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2 align-middle items-center">
                Nikon Z 5 &nbsp;<i className='fas fa-solid fa-tag' />{it}
              </Typography>
              <Typography>
                Intensely detailed 24MP full frame images and 4K UHD videos
                Superb 273 point autofocus system, detects and follow eyes (people, cats and dogs) and track subjects.
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small" className="bg-blue-500 text-white rounded-md px-2 font-semibold">$899</Typography>
              <Typography variant="small">Qty. 5</Typography>
              <button onClick={() => { }} className="flex gap-1 bg-blue-500 text-white rounded-md px-2 font-semibold">
                <i className="fas fa-solid fa-money-bill-1 fa-sm mt-[3px]" />
                <Tooltip content="buy" color='purple'>
                  <Typography variant="small">
                    Buy
                  </Typography>
                </Tooltip>
              </button>


            </CardFooter>
          </Card>
        ))

        }
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2 mt-6 p-2  motion-safe: animate-pulse bg-transparent">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/marvambi"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <TwitterIcon />
            <div className="ml-3">Twitter</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/marvambi"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/@marvambi"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <YoutubeIcon />
            <div className="ml-3">YouTube</div>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </div>
  )
}