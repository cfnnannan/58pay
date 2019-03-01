import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';


@Component({ selector: 'page-marquee', templateUrl: './index.html' })

export class PageMarqueeComponent implements OnInit
{

  
  constructor() { }
  
    ngOnInit()
    {
      setTimeout(() => this.Animate());
    }
  
    Animate()
    {
      const speed = 10;
      let _MARQUEE = this.contentRef.nativeElement as HTMLElement, _UL = _MARQUEE.querySelector('ul');
      _UL.innerHTML = _UL.innerHTML + _UL.innerHTML + _UL.innerHTML;
  
      if (!TypeInfo.Assigned(this.Direction))
      {
        let ContentWidth = _UL.getBoundingClientRect().width/3;
        if ( ContentWidth <= 0 ) return;
        _UL.style.animationDuration = ContentWidth / speed * 1000 + "ms";
      }
      else
      {
        let ContentHeight = _UL.clientHeight, _NODES = _UL.children.length, _PERH = ContentHeight/_NODES, _TOP = 0;
        let Animation = () =>
        {
          _TOP -= _PERH;
          _UL.style.transform = 'translateY('+ _TOP +'px)';
          if (Math.abs(_TOP) === (ContentHeight - _PERH)) _TOP = _PERH; 
          setTimeout(() => Animation(),3000);
        }
        Animation();
      }
    }
  
    get _textColor(): string
    {
      if (TypeInfo.Assigned(this.TextColor)) return 'text-' + this.TextColor;
    }
  
    private _content: Array<object>;

    @Input() TextColor: string;
    @Input() Direction: false;
    @Input() set Content(data: Array<object>) // [{title: 88.88, content: blablabla...}]
    {
      this._content = data;
    }
    @ViewChild('content') contentRef: ElementRef;

}

