function replaceText(){if(!document.getElementById){return;}
bodyText = document.getElementById("comment-holder");
theText = bodyText.innerHTML;
theText = theText.replace(/\[img\].*?'.*?\[\/img\]/gi, "");
theText = theText.replace(/\[youtube\].*?'.*?\[\/youtube\]/gi, "");
theText = theText.replace(/\[img\]/gi, "<div style='clear:both'></div><img style='float:left;margin: 3px 0px 5px;border:1px solid #DDD;max-width:98%;background:#FFF;padding:4px' src='");
theText = theText.replace(/\[\/img\]/gi, "'/><div style='clear:both'></div>");
theText = theText.replace(/\[youtube\]http:\/\/youtu.be/gi, "<p style='margin: 5px 0px'><iframe width='480' height='355' src='http://www.youtube.com/embed");
theText = theText.replace(/\[youtube\]http:\/\/www.youtube.com\/watch\?v=/gi, "<p style='margin: 5px 0px'><iframe width='480' height='355' src='http://www.youtube.com/embed/");
theText = theText.replace(/&amp;feature=/gi, "?rel=0' '");
theText = theText.replace(/\[\/youtube\]/gi, "?rel=0' frameborder='0' allowfullscreen></iframe></p>");
theText = theText.replace(/:\)\)/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-duNoMAb1RS4/T2WEWrOfR8I/AAAAAAAACZ0/ObgHf-PmTuE/s36/03.gif'/>");
theText = theText.replace(/:\(\(/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-LIr-ZdDp2xI/T2WEYDacVnI/AAAAAAAACaY/W7MF5qKO2sE/s47/06.gif'/>");
theText = theText.replace(/:\)/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-Q5lMkgcmVR4/T2WEWkNi3MI/AAAAAAAACZ4/7VBYeVbx7kA/s36/01.gif'/>");
theText = theText.replace(/:cool\:/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-mCsZPeixHvA/T2WEWivv9FI/AAAAAAAACZw/64ZGRgdlDeg/s36/02.gif'/>");
theText = theText.replace(/=\)\)/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-u__sc3DgZ2c/T2d0_lDLueI/AAAAAAAACkw/YbeuRNde61Q/s36/03a.gif'/>");
theText = theText.replace(/:\(/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-EwonQGBTYwo/T2WEXeVq3oI/AAAAAAAACZ8/4ixt2ZVlqrI/s36/04.gif'/>");
theText = theText.replace(/:-\(/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-fMtAZDakmBI/T2WEXswr5BI/AAAAAAAACaA/83R1X_PumTk/s36/05.gif'/>");
theText = theText.replace(/:d/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-Em3lvBgvYlI/T2WElbV0BaI/AAAAAAAACdI/ApynphQdka8/s36/7.gif'/>");
theText = theText.replace(/:-d/gi, "<img style='max-height:24px' src='https://lh4.googleusercontent.com/-0R7-2DC1klM/T2WEmMQajfI/AAAAAAAACdM/-4JFCeC6QD8/s36/8.gif'/>");
theText = theText.replace(/@-\)/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-PE2GWBseiGk/T2acYH_uNRI/AAAAAAAAChg/HloTeaRIdyQ/s36/09.gif'/>");
theText = theText.replace(/:p/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-nkyzLkHUPg8/T2WEYdFqFxI/AAAAAAAACaQ/Mu1yPq91yuc/s36/10.gif'/>");
theText = theText.replace(/:o/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-0-zgLVgK2Cg/T2WEY10FXuI/AAAAAAAACag/dyKQ5pPUIGQ/s36/11.gif'/>");
theText = theText.replace(/:&gt;\)/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-xbWqvOWJNE0/T2WEZM-VLTI/AAAAAAAACak/8dLATIlXRDk/s36/12.gif'/>");
theText = theText.replace(/\(o\)/gi, "<img style='max-height:24px' src='https://lh4.googleusercontent.com/-cguZVxYzR3o/T2WEZSgFvUI/AAAAAAAACas/nDJgr6YcuaI/s36/13.gif'/>");
theText = theText.replace(/\[-\(/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-VKGWq-wPGUw/T2WEaEQLA9I/AAAAAAAACa4/ZDnLP29mlgk/s36/14.gif'/>");
theText = theText.replace(/:-\?/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-hIVRIc7IAJw/T2WEaO5ASUI/AAAAAAAACaw/FLmCvzeMSbc/s36/15.gif'/>");
theText = theText.replace(/\(p\)/gi, "<img style='max-height:24px' src='https://lh4.googleusercontent.com/-hk3q3tP-0Pg/T2WEcRONc5I/AAAAAAAACbY/bJ00rge5Mq8/s36/16.gif'/>");
theText = theText.replace(/:-s/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-cysJNcXxT-Q/T2WEcxVM5dI/AAAAAAAACbU/Mvuc437f1ZI/s36/17.gif'/>");
theText = theText.replace(/\(m\)/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-H20tIsy7Hvw/T2WEbDW0R7I/AAAAAAAACbE/DymXsZOmO3s/s36/18.gif'/>");
theText = theText.replace(/8-\)/gi, "<img style='max-height:24px' src='https://lh4.googleusercontent.com/-IvNFZtzJJYI/T2WEcDj-0NI/AAAAAAAACbM/kiqtHbdkarQ/s36/19.gif'/>");
theText = theText.replace(/:-t/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-XCXdaCYaOGE/T2WEcmd15EI/AAAAAAAACbQ/Z5UyZCuX4Xo/s36/20.gif'/>");
theText = theText.replace(/:-b/gi, "<img style='max-height:24px' src='https://lh4.googleusercontent.com/-g6V0tBD1vwk/T2WEdRGJfWI/AAAAAAAACbo/P8P_SGEdhzI/s36/21.gif'/>");
theText = theText.replace(/b-\(/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-ErUGB8ea0H4/T2WEdm5-ZSI/AAAAAAAACbs/245Hxnaa82g/s35/22.gif'/>");
theText = theText.replace(/:-#/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-p-5AT-amLik/T2WEi_MJDqI/AAAAAAAACco/5J-MqivSQw4/s36/23.gif'/>");
theText = theText.replace(/=p~/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-H8izCFTaHFE/T2b39mmu2NI/AAAAAAAACkM/k4bDdFe301U/s36/24.gif'/>");
theText = theText.replace(/:-\$/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-LZn6dX8GslQ/T2W30lpp_kI/AAAAAAAAChA/Rym2Ql5H-jU/s36/25.gif'/>");
theText = theText.replace(/\(b\)/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-k6r8YBUhxVk/T2WEgBtjFtI/AAAAAAAACcE/U5U5uPCpxq8/s36/26.gif'/>");
theText = theText.replace(/\(f\)/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-pj6fMvZXTyc/T2WEga9-gjI/AAAAAAAACcM/kVpUCa7uqpw/s36/27.gif'/>");
theText = theText.replace(/x-\)/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-zI2UJmwerDM/T2WEhSRkuTI/AAAAAAAACcc/Gr3xFDrZF3Y/s36/28.gif'/>");
theText = theText.replace(/\(k\)/gi, "<img style='max-height:24px' src='https://lh3.googleusercontent.com/-ilBYLLWFQJQ/T2WEiJXJ7LI/AAAAAAAACcY/bXpkIPuVUto/s36/29.gif'/>");
theText = theText.replace(/\(h\)/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-_NHYkuf5bZg/T2WEjOhTIxI/AAAAAAAACcg/76qRE27R_ig/s36/30.gif'/>");
theText = theText.replace(/\(c\)/gi, "<img style='max-height:24px' src='https://lh6.googleusercontent.com/-O6m44_Z-8AA/T2WEjLRImnI/AAAAAAAACck/c_jh643HU6o/s36/31.gif'/>");
theText = theText.replace(/cheer/gi, "<img style='max-height:24px' src='https://lh5.googleusercontent.com/-9TYEg93ImUM/T2WEjvuhxTI/AAAAAAAACc0/KQRBXuuV_Yg/s36/32.gif'/>");
bodyText.innerHTML = theText;
}replaceText();