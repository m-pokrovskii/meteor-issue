Fresh install `meteor create --typescript`
Have files with the same name. For example `Hello.css` and `Hello.tsx`
add package `leaflet`
`import { Hello } from '/imports/ui/Hello'`; will import `Hello.css` instead of `Hello.tsx`
You don't even need to use this package. It also true for several others packages: `@zoomus/websdk`, `react-color` and others.