# solid-columns

[![license][license badge]][license link]
[![npm package][npm badge]][npm link]
[![github stars][stars badge]][stars link]
[![follow taep96 on x][x badge]][x link]

[license badge]: https://img.shields.io/github/license/taep96/solid-columns?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zY2FsZSI%2BPHBhdGggZD0ibTE2IDE2IDMtOCAzIDhjLS44Ny42NS0xLjkyIDEtMyAxcy0yLjEzLS4zNS0zLTFaIi8%2BPHBhdGggZD0ibTIgMTYgMy04IDMgOGMtLjg3LjY1LTEuOTIgMS0zIDFzLTIuMTMtLjM1LTMtMVoiLz48cGF0aCBkPSJNNyAyMWgxMCIvPjxwYXRoIGQ9Ik0xMiAzdjE4Ii8%2BPHBhdGggZD0iTTMgN2gyYzIgMCA1LTEgNy0yIDIgMSA1IDIgNyAyaDIiLz48L3N2Zz4%3D&logoColor=white&labelColor=black&color=white
[npm badge]: https://img.shields.io/npm/v/%40taep96%2Fsolid-columns?style=for-the-badge&logo=npm&labelColor=black&color=white
[stars badge]: https://img.shields.io/github/stars/taep96/solid-columns?style=for-the-badge&logo=github&labelColor=black&color=white
[x badge]: https://img.shields.io/twitter/follow/taep96?style=for-the-badge&logo=x&labelColor=black&color=%230000
[license link]: https://github.com/taep96/solid-columns/blob/main/LICENSE
[npm link]: https://www.npmjs.com/package/@taep96/solid-columns
[stars link]: https://github.com/taep96/solid-columns/stargazers
[x link]: https://twitter.com/intent/follow?screen_name=taep96

## Installation

```sh
bun install @taep96/solid-columns
```

## Usage

<!-- prettier-ignore-start -->

```tsx
import { Columns } from "@taep96/solid-columns";

<Columns
  class="flex gap-2 *:flex *:flex-1 *:flex-col *:gap-2"
  columns={3} // number (default)
  columns={{ // or breakpoints
    2: "640px", // anything less is 1 column
    3: "768px",
    4: "1024px",
    5: "1280px",
    6: "1536px",
  }}
>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</Columns>
```

<!-- prettier-ignore-end -->

## Props

| Name       | Type                               | Default | Description                                   |
| ---------- | ---------------------------------- | ------- | --------------------------------------------- |
| `columns?` | `number \| Record<number, string>` | `3`     | A fixed amount or and object with breakpoints |
