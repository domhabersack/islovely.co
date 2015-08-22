---
title: Clever Sass for vectors
---
    $vectors: (device, desktop,    256, 192),
              (device, laptop,     224, 160),
              (device, smartphone,  48,  96),
              (device, tablet,      80, 128),
              (logo,   github,      20,  20),
              (logo,   twitter,     20,  20);

    %vector {
      &::before {
        background: {
          position: center center;
          size: contain;
        }
        display: block;
        content: '';
      }
    }

    @each $prefix, $name, $width, $height in $vectors {
      .#{ $prefix }-#{ $name } {
        @extend %vector;

        &::before {
          height: #{ $height }px;
          width: #{ $width }px;
        }
      }
    }